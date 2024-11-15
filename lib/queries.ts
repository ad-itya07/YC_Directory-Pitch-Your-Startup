import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY = defineQuery(`
    *[_type == "startup" && defined(slug.current) && !defined($search) || category match $search || title match $search || author->name match $search] | order(_createdAt desc) {
    _id, 
    title,
    _createdAt,
    slug,
    author -> {
        _id, name, image, bio
    },
    views,
    description,
    category,
    image,
}
    `);

export const STARTUP_BY_ID_QUERY = defineQuery(`
    *[_type == "startup" && _id == $id][0] {
    _id, 
    title,
    _createdAt,
    slug,
    author -> {
        _id, name, image, bio, username, email
    },
    views,
    description,
    category,
    image,
    pitch
}
    `);
