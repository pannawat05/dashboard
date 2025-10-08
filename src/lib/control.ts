export async function getDetections(): Promise<any[]> {
    try {
        const response = await fetch('http://192.168.180.1:8888/data');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const result = await response.json();
        // ตรวจสอบว่า result.data เป็น array หรือไม่
        return Array.isArray(result.data) ? result.data : [];
    } catch (error) {
        console.error('Failed to fetch detections:', error);
        return [];
    }
}
