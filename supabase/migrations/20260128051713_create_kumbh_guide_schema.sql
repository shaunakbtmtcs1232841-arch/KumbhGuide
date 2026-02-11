/*
  # Nashik Kumbh Guide Database Schema

  1. New Tables
    - `temples`
      - `id` (uuid, primary key)
      - `name` (text)
      - `description` (text)
      - `image_url` (text)
      - `map_url` (text)
      - `address` (text)
      - `display_order` (integer)
      - `created_at` (timestamp)
    
    - `ghats`
      - `id` (uuid, primary key)
      - `name` (text)
      - `description` (text)
      - `ritual_context` (text)
      - `image_url` (text)
      - `map_url` (text)
      - `display_order` (integer)
      - `created_at` (timestamp)
    
    - `travel_locations`
      - `id` (uuid, primary key)
      - `name` (text)
      - `type` (text) - railway/bus/airport
      - `description` (text)
      - `info` (text)
      - `map_url` (text)
      - `display_order` (integer)
      - `created_at` (timestamp)
    
    - `updates`
      - `id` (uuid, primary key)
      - `title` (text)
      - `content` (text)
      - `published_at` (timestamp)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access (no authentication required for public information)
*/

-- Create temples table
CREATE TABLE IF NOT EXISTS temples (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  image_url text DEFAULT '',
  map_url text NOT NULL,
  address text NOT NULL,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE temples ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view temples"
  ON temples FOR SELECT
  TO anon, authenticated
  USING (true);

-- Create ghats table
CREATE TABLE IF NOT EXISTS ghats (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  ritual_context text NOT NULL,
  image_url text DEFAULT '',
  map_url text NOT NULL,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE ghats ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view ghats"
  ON ghats FOR SELECT
  TO anon, authenticated
  USING (true);

-- Create travel_locations table
CREATE TABLE IF NOT EXISTS travel_locations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  type text NOT NULL,
  description text NOT NULL,
  info text NOT NULL,
  map_url text NOT NULL,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE travel_locations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view travel locations"
  ON travel_locations FOR SELECT
  TO anon, authenticated
  USING (true);

-- Create updates table
CREATE TABLE IF NOT EXISTS updates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  published_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE updates ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view updates"
  ON updates FOR SELECT
  TO anon, authenticated
  USING (true);

-- Insert initial temple data
INSERT INTO temples (name, description, address, map_url, display_order) VALUES
('Trimbakeshwar Temple', 'One of the twelve Jyotirlingas, Trimbakeshwar is the source of the holy Godavari River. This ancient temple is dedicated to Lord Shiva and holds immense spiritual significance during Kumbh Mela.', 'Trimbak, Nashik District, Maharashtra 422212', 'https://maps.google.com/?q=Trimbakeshwar+Temple+Nashik', 1),
('Kalaram Temple', 'A historic temple dedicated to Lord Rama with black stone idols. Located in Panchavati, this temple is an important pilgrimage site with beautiful architecture dating back to 1794.', 'Panchavati, Nashik, Maharashtra 422003', 'https://maps.google.com/?q=Kalaram+Temple+Nashik', 2),
('Sita Gufa', 'A sacred cave believed to be the place where Goddess Sita stayed during their exile. The cave temple is nestled in the Panchavati area and offers a peaceful spiritual experience.', 'Panchavati, Nashik, Maharashtra 422003', 'https://maps.google.com/?q=Sita+Gufa+Nashik', 3),
('Naroshankar Temple', 'An ancient temple on the banks of Godavari river, known for its spiritual atmosphere and historical importance. Popular among devotees throughout the year.', 'Near Ramkund, Nashik, Maharashtra 422001', 'https://maps.google.com/?q=Naroshankar+Temple+Nashik', 4);

-- Insert initial ghat data
INSERT INTO ghats (name, description, ritual_context, map_url, display_order) VALUES
('Ramkund', 'The most sacred bathing ghat in Nashik, where it is believed Lord Rama bathed. This ghat is the focal point during Kumbh Mela and witnesses millions of pilgrims taking holy dips.', 'Ritual bathing, immersion of ashes, and pind daan ceremonies are performed here. The ghat remains crowded throughout Kumbh with special significance on auspicious bathing dates.', 'https://maps.google.com/?q=Ramkund+Nashik', 1),
('Kushavarta Kund', 'Located near Trimbakeshwar, this is the sacred origin of the Godavari River. Pilgrims consider bathing here during Kumbh as highly auspicious.', 'The kund is central to Trimbakeshwar Kumbh celebrations. Devotees believe that bathing here washes away sins and brings spiritual merit.', 'https://maps.google.com/?q=Kushavarta+Kund+Trimbakeshwar', 2),
('Ganga Ghat', 'A serene ghat on the banks of Godavari, suitable for peaceful bathing and religious ceremonies. Well-maintained with steps leading to the river.', 'Morning prayers and evening aarti are conducted here. Pilgrims perform various rituals and take holy dips throughout the day.', 'https://maps.google.com/?q=Ganga+Ghat+Nashik', 3),
('Narad Ghat', 'Named after Sage Narad, this ghat has mythological significance and is frequented by devotees for bathing and prayers.', 'Traditional bathing rituals and pujas are performed. The ghat provides facilities for pilgrims during peak periods.', 'https://maps.google.com/?q=Narad+Ghat+Nashik', 4);

-- Insert travel location data
INSERT INTO travel_locations (name, type, description, info, map_url, display_order) VALUES
('Nashik Road Railway Station', 'railway', 'Major railway junction connecting Nashik to major cities across India. The main station for long-distance trains.', 'Well-connected to Mumbai, Pune, Delhi, and other major cities. Located about 8 km from Nashik city center. Facilities include waiting rooms, refreshment stalls, and prepaid taxi/auto services. Additional trains are scheduled during Kumbh Mela period.', 'https://maps.google.com/?q=Nashik+Road+Railway+Station', 1),
('Nashik Central Bus Stand (CBS)', 'bus', 'Main bus terminal with extensive connectivity to surrounding cities and towns. Maharashtra State Road Transport Corporation (MSRTC) operates regular services.', 'Located in the heart of Nashik city. Regular bus services to Mumbai, Pune, Aurangabad, and other cities. During Kumbh, additional buses are operated. Facilities include waiting areas, ticket counters, and basic amenities.', 'https://maps.google.com/?q=Nashik+CBS+Central+Bus+Stand', 2),
('Ozar Airport (Nashik Airport)', 'airport', 'Domestic airport serving Nashik with limited commercial flights. Primarily used for cargo and occasional passenger services.', 'Located approximately 25 km from Nashik city. Limited commercial operations currently. Mumbai Airport (approximately 165 km) serves as the nearest major international airport. Taxi and bus services available to city.', 'https://maps.google.com/?q=Ozar+Airport+Nashik', 3);

-- Insert initial update
INSERT INTO updates (title, content, published_at) VALUES
('Welcome to Nashik Kumbh Guide', 'This website provides authentic information about Nashik-Trimbakeshwar Kumbh Mela. Information will be updated regularly based on official announcements from Maharashtra Government and Nashik Administration. Stay tuned for updates on dates, arrangements, and guidelines.', now());
