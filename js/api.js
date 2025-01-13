async function fetchProfile() {
  const url =
    "https://raw.githubusercontent.com/Manoelllima/portfolio/refs/heads/main/data/profile.json";
  const fetching = await fetch(url);
  return await fetching.json();
}


