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
    // Convert file to base64 if present
    let resumeData = null;
    if (data.resume) {
      resumeData = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          const base64String = (reader.result as string).split(',')[1];
          resolve(base64String);
        };
        reader.onerror = reject;
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
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      // Try to parse error response, but handle cases where response might not be JSON
      let errorMessage = 'Failed to submit application';
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
    console.error('Error submitting career application:', error);
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('An unexpected error occurred');
  }
};

