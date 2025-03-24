import axios from "axios";
import { cache } from "react";

const api = axios.create({
  baseURL:
    "https://myresume-6ab68-default-rtdb.europe-west1.firebasedatabase.app/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const sendContacts = (data: object) =>
  api.post("contact-form.json", data);

const getCertsApi = () => [{}];
const getBlogPostsApi = () => [{}];
const getAchievementsApi = () => [{}];
const getPartnersApi = () => [{}];
const getTestimonialsApi = () => [{}];
const getProgramsApi = () => [{}];
const getVlogApi = () => [{}];

export const apiCallRevalidate = 60 * 60 * 24 * 7; // seconds * mins * hours * days

export const getCerts = cache(async () => {
  const data = await getCertsApi();

  return data;
});

export const getBlogPosts = cache(async () => {
  const data = await getBlogPostsApi();

  return data;
});

export const getAchievements = cache(async () => {
  const data = await getAchievementsApi();

  return data;
});

export const getPartners = cache(async () => {
  const data = await getPartnersApi();

  return data;
});

export const getTestimonials = cache(async () => {
  const data = await getTestimonialsApi();

  return data;
});

export const getPrograms = cache(async () => {
  const data = await getProgramsApi();

  return data;
});

export const getVlog = cache(async () => {
  const data = await getVlogApi();

  return data;
});
