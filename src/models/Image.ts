export interface ImageModel {
    destination: string
    filename: string
    size: number // Bloquear acima de 5120 (5mb)
    src: string
}