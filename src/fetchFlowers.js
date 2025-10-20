export async function getFlowers() {
    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`;
    const token = `Bearer ${import.meta.env.VITE_PAT}`;

    try {
        const resp = await fetch(url, {
            method: "GET",
            headers: {                
                "Authorization": token,
            }
        });
        if(!resp.ok){
            throw new Error(`HTTP error: ${resp.status}`)
        }
        const data = await resp.json();
        
        return data.records.map((record)=>({
            id: record.id,
            name: record.fields.Name,
            traits: record.fields.Traits,
            description: record.fields.Description,
            image: record.fields.ImageURL,
        }))
    } catch(error) {
        console.error("Error fetching flowers:", error);
        throw error;
    } 
}
