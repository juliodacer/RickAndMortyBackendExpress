export const charactersGraphqlQuery = `
{
  characters {
    results {
      id,
      name,
      image
      status
      species
    }
  }
}
`;