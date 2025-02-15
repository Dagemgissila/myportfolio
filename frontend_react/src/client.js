import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "uhwium70",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "skbqdtm5SC35hYlUMFEfBySWLALoubnnrUNKaihAefrRdJA66lCO8Taxs0lTaT7pgxNNBQdtBOSyJPBLRTdpVOLQWKJv2R3GRlFWEKkoxfUKMvToyrvAcZSEMa7tqT6pXH0lxZWxC3uQcVUEBEPxE3gjY2vJzScjj12ithUrPbeKKpfxwB1I",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
