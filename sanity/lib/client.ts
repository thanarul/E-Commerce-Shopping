import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: "skJfUYu19WhWZ6OkJC0xCvwdZGyLsMJGXx6vEwLZ3MNGQunoIp1PsEHjcWeHbKCrTW5XeqQR6rA1Ml6zAD2VdyngpNrOmzWgfDvHBmChnVZXBG0q5CXIYJTjMJnYDOV54QnOIe2rQGA45qnI7PKOInKMrr9ixEupn6dMacr2GNpqBNm4d1Br"
})
