import { PhotoCreateService } from './photo-create.service'
import { Photo } from '../../../model/photo';
describe('PhotoCreateTest', () => {

  let service: PhotoCreateService
  let photo: Photo

  beforeEach(() => {
    service = new PhotoCreateService
    photo = getFotoCompleta()
  })

  it('Deve exibir mensagem de obrigatoriedade para o nome usuario', () => {
    photo.nomeUsuario = " "
    expect(() => service.validar(photo)).toThrow(new Error("Informe o nome do usuário."))

    photo.nomeUsuario = null
    expect(() => service.validar(photo)).toThrow(new Error("Informe o nome do usuário."))
  })

  it('Deve exibir mensagem de obrigatoriedade para a foto', () => {
    photo.conteudo = null
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
  photoIdeal.conteudo = new String
  photoIdeal.legenda = "Visitando a América Central."
  photoIdeal.data = new Date
  return photoIdeal
}
