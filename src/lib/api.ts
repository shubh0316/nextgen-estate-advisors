// For Vercel deployment, use relative paths. For local dev, use the server URL
const API_BASE_URL = import.meta.env.VITE_API_URL || 
  (import.meta.env.DEV ? 'http://localhost:3001' : '');

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  propertyName?: string;
}

export interface CareerFormData {
  name: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  coverLetter: string;
  resume?: File | null;
}

export const submitContactForm = async (data: ContactFormData): Promise<void> => {
  try {
    const url = API_BASE_URL ? `${API_BASE_URL}/api/contact` : '/api/contact';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      // Try to parse error response, but handle cases where response might not be JSON
      let errorMessage = 'Failed to send message';
      try {
        const errorData = await response.json();
        errorMessage = errorData.error || errorMessage;
      } catch (e) {
        // If response is not JSON, use status text
        errorMessage = response.statusText || `Server error (${response.status})`;
      }
      throw new Error(errorMessage);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('An unexpected error occurred');
  }
};

export const submitCareerApplication = async (data: CareerFormData): Promise<void> => {
  try {
    console.log('Submitting career application:', { 
      name: data.name, 
      email: data.email, 
      position: data.position,
      hasResume: !!data.resume 
    });

    // Convert file to base64 if present
    let resumeData = null;
    if (data.resume) {
      console.log('Converting resume to base64:', data.resume.name, data.resume.size);
      resumeData = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          const base64String = (reader.result as string).split(',')[1];
          console.log('Resume converted, base64 length:', base64String.length);
          resolve(base64String);
        };
        reader.onerror = (error) => {
          console.error('Error reading file:', error);
          reject(error);
        };
        reader.readAsDataURL(data.resume);
      });
    }

    const payload = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      position: data.position,
      experience: data.experience,
      coverLetter: data.coverLetter,
      resume: resumeData
        ? {
            name: data.resume.name,
            content: resumeData,
          }
        : null,
    };

    const url = API_BASE_URL ? `${API_BASE_URL}/api/career` : '/api/career';
    console.log('API_BASE_URL:', API_BASE_URL);
    console.log('Final URL:', url);
    console.log('Sending request to:', url);
    console.log('Payload size:', JSON.stringify(payload).length, 'bytes');
    console.log('About to call fetch...');

    let response;
    try {
      response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      console.log('Fetch completed!', response);
    } catch (fetchError) {
      console.error('Fetch error (network/CORS issue):', fetchError);
      throw new Error(`Network error: ${fetchError instanceof Error ? fetchError.message : 'Failed to connect to server'}`);
    }

    console.log('Response status:', response.status, response.statusText);

    if (!response.ok) {
      // Try to parse error response, but handle cases where response might not be JSON
      let errorMessage = 'Failed to submit application';
      try {
        const errorData = await response.json();
        console.error('Error response:', errorData);
        errorMessage = errorData.error || errorMessage;
        if (errorData.details) {
          errorMessage += `: ${errorData.details}`;
        }
      } catch (e) {
        // If response is not JSON, use status text
        const text = await response.text();
        console.error('Non-JSON error response:', text);
        errorMessage = response.statusText || `Server error (${response.status})`;
      }
      throw new Error(errorMessage);
    }

    const result = await response.json();
    console.log('Application submitted successfully:', result);
    return result;
  } catch (error) {
    console.error('Error submitting career application:', error);
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('An unexpected error occurred');
  }
};

