import { ArtistService } from '../../services/artistService'
import { prismaMock } from '../../singleton'
import { ArtStyleType } from '../../../generated/prisma'

test('should get all artists', async () => {
  const artists = [
    {
      id: '682d142166f013a593aa65d5',
      name: 'Test Artist',
      aboriginalName: 'Test Artist',
      tribe: 'Test Tribe',
      region: 'Fake Region',
      biography: 'Renowned Aboriginal artist from Fake Region2',
      birthYear: 1950,
      deathYear: 1920,
      artStyles: [ArtStyleType.DOT_PAINTING],
      imageUrl: 'https://example.com/test.jpg',
      artefacts: [],
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]

  prismaMock.artist.findMany.mockResolvedValue(artists)

  await expect(ArtistService.getAllArtists()).resolves.toEqual(artists)
})

test('should get artists by art style', async () => {
  const artists = [
    {
      id: '682d142166f013a593aa65d5',
      name: 'Test Artist',
      aboriginalName: 'Test Artist',
      tribe: 'Test Tribe',
      region: 'Fake Region',
      biography: 'Renowned Aboriginal artist from Fake Region2',
      birthYear: 1950,
      deathYear: 1920,
      artStyles: [ArtStyleType.DOT_PAINTING],
      imageUrl: 'https://example.com/test.jpg',
      artefacts: [],
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]

  prismaMock.artist.findMany.mockResolvedValue(artists)

  await expect(ArtistService.getArtistByArtstyle('DOT_PAINTING')).resolves.toEqual(artists)
})

test('should get single artist', async () => {
  const artist = {
    id: '682d142166f013a593aa65d5',
    name: 'Test Artist',
    aboriginalName: 'Test Artist',
    tribe: 'Test Tribe',
    region: 'Fake Region',
    biography: 'Renowned Aboriginal artist from Fake Region2',
    birthYear: 1950,
    deathYear: 1920,
    artStyles: [ArtStyleType.DOT_PAINTING],
    imageUrl: 'https://example.com/test.jpg',
    artefacts: [],
    createdAt: new Date(),
    updatedAt: new Date()
  }

  prismaMock.artist.findUniqueOrThrow.mockResolvedValue(artist)

  await expect(ArtistService.getArtist('682d142166f013a593aa65d5')).resolves.toEqual(artist)
})

test('should create new artist', async () => {
  const newArtistData = {
    name: 'New Artist',
    biography: 'Biography of new artist',
    artStyles: [ArtStyleType.CONTEMPORARY]
  }

  const createdArtist = {
    id: '682d142166f013a593aa65d5',
    name: 'New Artist',
    aboriginalName: null,
    tribe: null,
    region: null,
    biography: 'Biography of new artist',
    birthYear: null,
    deathYear: null,
    artStyles: [ArtStyleType.CONTEMPORARY],
    imageUrl: null,
    createdAt: new Date(),
    updatedAt: new Date()
  }

  prismaMock.artist.create.mockResolvedValue(createdArtist)

  await expect(ArtistService.createArtist(newArtistData)).resolves.toEqual(createdArtist)
})

test('should update artist name', async () => {
  const updateData = {
    name: 'Updated Artist Name'
  }

  const updatedArtist = {
    id: '682d142166f013a593aa65d5',
    name: 'unrelated name',
    aboriginalName: null,
    tribe: null,
    region: null,
    biography: 'Original biography',
    birthYear: null,
    deathYear: null,
    artStyles: [ArtStyleType.DOT_PAINTING],
    imageUrl: null,
    createdAt: new Date(),
    updatedAt: new Date()
  }

  prismaMock.artist.update.mockResolvedValue(updatedArtist)

  await expect(ArtistService.updateArtist('682d142166f013a593aa65d5', updateData)).resolves.toEqual(updatedArtist)
})

test('should delete artist', async () => {
  const deletedArtist = {
    id: '682d142166f013a593aa65d5',
    name: 'Deleted Artist',
    aboriginalName: null,
    tribe: null,
    region: null,
    biography: 'Biography',
    birthYear: null,
    deathYear: null,
    artStyles: [ArtStyleType.DOT_PAINTING],
    imageUrl: null,
    createdAt: new Date(),
    updatedAt: new Date()
  }

  prismaMock.artist.delete.mockResolvedValue(deletedArtist)

  await expect(ArtistService.deleteArtist('682d142166f013a593aa65d5')).resolves.toEqual(deletedArtist)
})