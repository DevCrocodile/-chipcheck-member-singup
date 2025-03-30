import { useState, useEffect } from 'react';
import { getSubscriptionplans } from '../services/subscriptions';

export function useFetchSubscriptions() {
    const [subscriptions, setSubscriptions] = useState<{ id: string, name: string, price: number, description: string }[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        async function fetchSubscriptions() {
            try {
                const data = await getSubscriptionplans()
                setSubscriptions(data)
            } catch {
                setError("Error fetching subscriptions")
            } finally {
                setLoading(false)
            }
        }

        fetchSubscriptions()
    }, [])

    return { subscriptions, loadingSubscriptions: loading, error }
}