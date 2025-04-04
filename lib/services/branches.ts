
export async function getBranches(businessId: string) {
    const data = await fetch(`http://localhost:3000/api/businesses/${businessId}/branches`)
    if (!data.ok) {
        throw new Error('Error fetching branches');
    }
    const branches = await data.json();

    return branches;
}