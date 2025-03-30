import { useState, useEffect } from 'react';
import { getBranches } from '../services/branches';

export function useFetchBranches() {
    const [branches, setBranches] = useState<{ id: string, address: string }[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        async function fetchBranches() {
            try {
                const data = await getBranches();
                setBranches(data);
            } catch {
                setError("Error fetching branches");
            } finally {
                setLoading(false);
            }
        }

        fetchBranches();
    }, [])

    return { branches, loadingBranches: loading, error }
}