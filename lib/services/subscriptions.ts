export async function getSubscriptionplans(businessId: string) {
    const data = await fetch(`http://localhost:3000/api/businesses/${businessId}/subscription-plans`)
    if (!data.ok) {
        throw new Error('Error fetching subscriptions');
    }
    const subscriptions = await data.json();
    return subscriptions
}