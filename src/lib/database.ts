// Database interface for IBM Cloud Cloudant
// This will handle user management, newsletters, and other data

export interface User {
  _id?: string;
  _rev?: string;
  type: 'user';
  email: string;
  name: string;
  provider: 'google' | 'ibm' | 'email';
  passwordHash?: string; // Only for email/password users
  createdAt: string;
  lastLogin: string;
  preferences: {
    newsletter: boolean;
    dashboardTheme: 'light' | 'dark';
    notifications: boolean;
  };
  profile: {
    company?: string;
    role?: string;
    interests: string[];
    ibmCloudExperience: 'beginner' | 'intermediate' | 'advanced';
  };
}

export interface NewsletterSubscription {
  _id?: string;
  _rev?: string;
  type: 'newsletter';
  email: string;
  subscribed: boolean;
  subscribedAt: string;
  preferences: {
    monthlyDigest: boolean;
  };
  lastEmailSent?: string;
  unsubscribeToken: string;
}

export interface MeetingBooking {
  _id?: string;
  _rev?: string;
  type: 'meeting';
  userId?: string; // Optional, for logged-in users
  email: string;
  name: string;
  company?: string;
  meetingType: 'intro' | 'consultation' | 'workshop';
  preferredDate: string;
  preferredTime: string;
  timezone: string;
  notes?: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  calendlyEventId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserActivity {
  _id?: string;
  _rev?: string;
  type: 'activity';
  userId: string;
  action: string;
  details: any;
  timestamp: string;
  ipAddress?: string;
  userAgent?: string;
}

// Database operations interface
export interface DatabaseService {
  // User operations
  createUser(user: Omit<User, '_id' | '_rev' | 'createdAt' | 'lastLogin'>): Promise<User>;
  getUserById(id: string): Promise<User | null>;
  getUserByEmail(email: string): Promise<User | null>;
  updateUser(id: string, updates: Partial<User>): Promise<User>;
  deleteUser(id: string): Promise<void>;
  
  // Newsletter operations
  subscribeToNewsletter(email: string, preferences?: Partial<NewsletterSubscription['preferences']>): Promise<NewsletterSubscription>;
  unsubscribeFromNewsletter(token: string): Promise<void>;
  getNewsletterSubscribers(): Promise<NewsletterSubscription[]>;
  
  // Meeting operations
  createMeeting(meeting: Omit<MeetingBooking, '_id' | '_rev' | 'createdAt' | 'updatedAt'>): Promise<MeetingBooking>;
  updateMeeting(id: string, updates: Partial<MeetingBooking>): Promise<MeetingBooking>;
  getMeetingsByUser(userId: string): Promise<MeetingBooking[]>;
  
  // Activity logging
  logActivity(activity: Omit<UserActivity, '_id' | '_rev' | 'timestamp'>): Promise<void>;
  getUserActivities(userId: string, limit?: number): Promise<UserActivity[]>;
}

// Mock implementation for development
export class MockDatabaseService implements DatabaseService {
  private users: Map<string, User> = new Map();
  private newsletters: Map<string, NewsletterSubscription> = new Map();
  private meetings: Map<string, MeetingBooking> = new Map();
  private activities: Map<string, UserActivity> = new Map();

  async createUser(userData: Omit<User, '_id' | '_rev' | 'createdAt' | 'lastLogin'>): Promise<User> {
    const user: User = {
      ...userData,
      _id: `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString(),
      lastLogin: new Date().toISOString(),
    };
    
    this.users.set(user._id!, user);
    return user;
  }

  async getUserById(id: string): Promise<User | null> {
    return this.users.get(id) || null;
  }

  async getUserByEmail(email: string): Promise<User | null> {
    for (const user of this.users.values()) {
      if (user.email === email) return user;
    }
    return null;
  }

  async updateUser(id: string, updates: Partial<User>): Promise<User> {
    const user = this.users.get(id);
    if (!user) throw new Error('User not found');
    
    const updatedUser = { ...user, ...updates, _rev: `rev_${Date.now()}` };
    this.users.set(id, updatedUser);
    return updatedUser;
  }

  async deleteUser(id: string): Promise<void> {
    this.users.delete(id);
  }

                async subscribeToNewsletter(email: string, preferences?: Partial<NewsletterSubscription['preferences']>): Promise<NewsletterSubscription> {
                const subscription: NewsletterSubscription = {
                  type: 'newsletter',
                  email,
                  subscribed: true,
                  subscribedAt: new Date().toISOString(),
                  preferences: {
                    monthlyDigest: true,
                    ...preferences,
                  },
                  unsubscribeToken: `unsub_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
                };
                
                const id = `newsletter_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
                this.newsletters.set(id, subscription);
                return subscription;
              }

  async unsubscribeFromNewsletter(token: string): Promise<void> {
    for (const [id, subscription] of this.newsletters.entries()) {
      if (subscription.unsubscribeToken === token) {
        subscription.subscribed = false;
        this.newsletters.set(id, subscription);
        break;
      }
    }
  }

  async getNewsletterSubscribers(): Promise<NewsletterSubscription[]> {
    return Array.from(this.newsletters.values()).filter(sub => sub.subscribed);
  }

  async createMeeting(meetingData: Omit<MeetingBooking, '_id' | '_rev' | 'createdAt' | 'updatedAt'>): Promise<MeetingBooking> {
    const meeting: MeetingBooking = {
      ...meetingData,
      _id: `meeting_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    
    this.meetings.set(meeting._id!, meeting);
    return meeting;
  }

  async updateMeeting(id: string, updates: Partial<MeetingBooking>): Promise<MeetingBooking> {
    const meeting = this.meetings.get(id);
    if (!meeting) throw new Error('Meeting not found');
    
    const updatedMeeting = { ...meeting, ...updates, updatedAt: new Date().toISOString(), _rev: `rev_${Date.now()}` };
    this.meetings.set(id, updatedMeeting);
    return updatedMeeting;
  }

  async getMeetingsByUser(userId: string): Promise<MeetingBooking[]> {
    return Array.from(this.meetings.values()).filter(meeting => meeting.userId === userId);
  }

  async logActivity(activityData: Omit<UserActivity, '_id' | '_rev' | 'timestamp'>): Promise<void> {
    const activity: UserActivity = {
      ...activityData,
      _id: `activity_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date().toISOString(),
    };
    
    this.activities.set(activity._id!, activity);
  }

  async getUserActivities(userId: string, limit: number = 50): Promise<UserActivity[]> {
    const userActivities = Array.from(this.activities.values())
      .filter(activity => activity.userId === userId)
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
      .slice(0, limit);
    
    return userActivities;
  }
}

// Export singleton instance
export const mockDb = new MockDatabaseService(); 