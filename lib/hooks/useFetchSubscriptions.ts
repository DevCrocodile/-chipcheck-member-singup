import { useState, useEffect } from 'react';
import { getSubscriptionplans } from '../services/subscriptions';

export function useFetchSubscriptions({businessId}:{businessId:string}) {
    const [subscriptions, setSubscriptions] = useState<{ id: string, name: string, price: number, description: string }[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        async function fetchSubscriptions() {
            try {
                const data = await getSubscriptionplans(businessId)
                setSubscriptions(data)
            } catch {
                setError("Error fetching subscriptions")
            } finally {
                setLoading(false)
            }
        }

        fetchSubscriptions()
    }, [businessId])

    return { subscriptions, loadingSubscriptions: loading, error }
}