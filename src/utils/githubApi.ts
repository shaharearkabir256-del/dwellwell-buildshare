// GitHub API utilities for property management
const GITHUB_API_BASE = 'https://api.github.com';
const REPO_OWNER = 'propertybd';
const REPO_NAME = 'propertybd';

export interface Property {
  id: string;
  title: string;
  description: string;
  price: string;
  location: string;
  area: string;
  type: string;
  features: string[];
  image: string;
  status: string;
  createdAt?: string;
}

// Fetch properties from GitHub raw content
export const fetchProperties = async (): Promise<Property[]> => {
  try {
    const response = await fetch(
      `https://raw.githubusercontent.com/${REPO_OWNER}/${REPO_NAME}/main/src/data/properties.json`
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const properties = await response.json();
    return Array.isArray(properties) ? properties : [];
  } catch (error) {
    console.error('Error fetching properties:', error);
    return [];
  }
};

// Get file content from GitHub API
export const getGitHubFileContent = async (path: string, token?: string) => {
  const headers: Record<string, string> = {
    'Accept': 'application/vnd.github.v3+json'
  };
  
  if (token) {
    headers['Authorization'] = `token ${token}`;
  }
  
  const response = await fetch(
    `${GITHUB_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${path}`,
    { headers }
  );
  
  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`);
  }
  
  return response.json();
};

// Update file content in GitHub
export const updateGitHubFile = async (
  path: string, 
  content: string, 
  message: string,
  token: string,
  sha?: string
) => {
  const response = await fetch(
    `${GITHUB_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${path}`,
    {
      method: 'PUT',
      headers: {
        'Authorization': `token ${token}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message,
        content: Buffer.from(content).toString('base64'),
        sha
      })
    }
  );
  
  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`);
  }
  
  return response.json();
};

// Validate webhook endpoint
export const validateWebhook = async (): Promise<boolean> => {
  try {
    const response = await fetch('/api/telegram-webhook', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ test: true })
    });
    
    return response.ok;
  } catch (error) {
    console.error('Webhook validation failed:', error);
    return false;
  }
};