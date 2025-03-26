import { marketingMaterials } from "../assets/data/marketing-data";

/**
 * This function will filter the marketing materials object:
 *
 * {
 *  posters: [{},...],
 *  videos: [{}...],
 *  socialMediaContent: [{}...],
 *  websiteContent: [{}...],
 *  statementStuffers: [{}...],
 *  brochures: [{}...],
 *  printReadyContent: [{}...],
 * }
 *
 * function takes in one object called options with types, filters, and cardType properties. type is (posters, videos, socialMediaContent... etc), filters is (holiday, general use, gift, access etc)
 *
 * {
 *  types: [],
 *  filters: [],
 *  cards: []
 * }
 */

export function marketingFilter(types = null, filter = null, cardType = null) {
  // if no options or filters
  if (types == null && filter == null) return marketingMaterials;
}
