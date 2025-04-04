import { useState, useEffect } from 'react';
import { getBranches } from '../services/branches';

export function useFetchBranches({ businessId }: { businessId: string }) {
    const [branches, setBranches] = useState<{ id: string, address: string }[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        async function fetchBranches() {
            try {
                const data = await getBranches(businessId);
                setBranches(data);
            } catch {
                setError("Error fetching branches");
            } finally {
                setLoading(false);
            }
        }

        fetchBranches();
    }, [businessId])

    return { branches, loadingBranches: loading, error }
}