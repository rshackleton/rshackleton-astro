import groq from 'groq';

export const sections = groq`
  _type,
  anchorId,
  _type == "articleList" => {
    count,
    cta,
    title,
  },
  _type == "bio" => {
    title,
  },
  _type == "experience" => {
    title,
  },
  _type == "hero" => {
    content,
    cta,
    subtitle,
    title,
  },
`;
