export declare class Review {
    id: number;
    tasker_id: number;
    user_id: number;
    customer_rating: number;
    customer_review: string;
    feedback_customer: string;
    created_at: Date;
    updated_at: Date;
    updateTimestamps(): void;
    updateTimestamp(): void;
}
