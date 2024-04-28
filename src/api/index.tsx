import { cache } from "react";
import axios from "axios";

const writeApi = axios.create({
  baseURL:
    "https://myresume-6ab68-default-rtdb.europe-west1.firebasedatabase.app/",
  headers: {
    "Content-Type": "application/json",
  },
});

const readApi = axios.create({
  baseURL:
    "https://noor-kayyali-default-rtdb.europe-west1.firebasedatabase.app/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const sendContacts = (data: object) =>
  writeApi.post("contact-form.json", data);

const getCertsApi = () => readApi.get("certificates.json");
const getBlogPostsApi = () => readApi.get("blog.json");
const getAchievementsApi = () => readApi.get("achievements.json");
const getPartnersApi = () => readApi.get("partners.json");
const getTestimonialsApi = () => readApi.get("testimonials.json");
const getUniqueProgramsApi = () => readApi.get("uniquePrograms.json");
const getVlogApi = () => readApi.get("vlog.json");

export const apiCallRevalidate = 60 * 60 * 24 * 7; // seconds * mins * hours * days

export const getCerts = cache(async () => {
  const { data } = await getCertsApi();

  return data;
});

export const getBlogPosts = cache(async () => {
  const { data } = await getBlogPostsApi();

  return data;
});

export const getAchievements = cache(async () => {
  const { data } = await getAchievementsApi();

  return data;
});

export const getPartners = cache(async () => {
  const { data } = await getPartnersApi();

  return data;
});

export const getTestimonials = cache(async () => {
  const { data } = await getTestimonialsApi();

  return data;
});

export const getUniquePrograms = cache(async () => {
  const { data } = await getUniqueProgramsApi();

  return data;
});

export const getVlog = cache(async () => {
  const { data } = await getVlogApi();

  return data;
});
