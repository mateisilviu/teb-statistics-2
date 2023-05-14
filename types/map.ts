export interface MapProps {
    center?: number[]
    markers?: [{
        position: number[],
        description: string
    }]
}