import { PhotoService } from './photo.service'
import { Photo } from '../../model/photo';
describe('PhotoTest', () => {

  let service: PhotoService
  let photo: Photo

  beforeEach(() => {
    service = new PhotoService
    photo = getFotoCompleta()
  })

  it('Deve exibir mensagem de obrigatoriedade para o nome usuario', () => {
    photo.nomeUsuario = " "
    expect(() => service.validar(photo)).toThrow(new Error("Informe o nome do usuário."))

    photo.nomeUsuario = null
    expect(() => service.validar(photo)).toThrow(new Error("Informe o nome do usuário."))
  })

  it('Deve exibir mensagem de obrigatoriedade para a foto', () => {
    photo.imagem = null
    expect(() => service.validar(photo)).toThrow(new Error("Selecione a imagem."))
  })

  it('Deve exibir mensagem de obrigatoriedade para a legenda', () => {
    photo.legenda = " "
    expect(() => service.validar(photo)).toThrow(new Error("Informe a legenda."))

    photo.legenda = null
    expect(() => service.validar(photo)).toThrow(new Error("Informe a legenda."))
  })

  it('Deve exibir mensagem de obrigatoriedade para a data', () => {
    photo.data = null
    expect(() => service.validar(photo)).toThrow(new Error("Informe a data."))
  })

  it('Nao deve exibir mensagem quando todos dados estiverem preenchidos', () => {
    expect(() => service.validar(photo)).toBeTruthy()
  })
})

function getFotoCompleta(): Photo {
  let photoIdeal = new Photo
  photoIdeal.nomeUsuario = "Ronaldo Nazario."
  photoIdeal.imagem = new Blob
  photoIdeal.legenda = "Visitando a América Central."
  photoIdeal.data = new Date
  return photoIdeal
}
