--
-- PostgreSQL database dump
--

-- Dumped from database version 14.2
-- Dumped by pg_dump version 14.2

-- Started on 2022-03-28 14:31:18

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 214 (class 1259 OID 16468)
-- Name: blood_donation; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.blood_donation (
    id integer NOT NULL,
    donor_id bigint,
    doctor_id bigint,
    quantity double precision
);


ALTER TABLE public.blood_donation OWNER TO postgres;

--
-- TOC entry 213 (class 1259 OID 16467)
-- Name: blood_donation_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.blood_donation_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.blood_donation_id_seq OWNER TO postgres;

--
-- TOC entry 3333 (class 0 OID 0)
-- Dependencies: 213
-- Name: blood_donation_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.blood_donation_id_seq OWNED BY public.blood_donation.id;


--
-- TOC entry 212 (class 1259 OID 16461)
-- Name: doctor; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.doctor (
    id integer NOT NULL,
    firstname character varying(50),
    lastname character varying(50)
);


ALTER TABLE public.doctor OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 16460)
-- Name: doctor_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.doctor_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.doctor_id_seq OWNER TO postgres;

--
-- TOC entry 3334 (class 0 OID 0)
-- Dependencies: 211
-- Name: doctor_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.doctor_id_seq OWNED BY public.doctor.id;


--
-- TOC entry 210 (class 1259 OID 16454)
-- Name: donor; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.donor (
    id integer NOT NULL,
    name character varying(50),
    dob date,
    date_of_reg timestamp without time zone,
    blood_group character(3),
    address character varying(150),
    city character varying(50),
    pincode character(7)
);


ALTER TABLE public.donor OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 16453)
-- Name: donor_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.donor_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.donor_id_seq OWNER TO postgres;

--
-- TOC entry 3335 (class 0 OID 0)
-- Dependencies: 209
-- Name: donor_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.donor_id_seq OWNED BY public.donor.id;


--
-- TOC entry 3176 (class 2604 OID 16471)
-- Name: blood_donation id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.blood_donation ALTER COLUMN id SET DEFAULT nextval('public.blood_donation_id_seq'::regclass);


--
-- TOC entry 3175 (class 2604 OID 16464)
-- Name: doctor id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.doctor ALTER COLUMN id SET DEFAULT nextval('public.doctor_id_seq'::regclass);


--
-- TOC entry 3174 (class 2604 OID 16457)
-- Name: donor id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.donor ALTER COLUMN id SET DEFAULT nextval('public.donor_id_seq'::regclass);


--
-- TOC entry 3327 (class 0 OID 16468)
-- Dependencies: 214
-- Data for Name: blood_donation; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.blood_donation (id, donor_id, doctor_id, quantity) VALUES (1, 1, 1, 1.2);
INSERT INTO public.blood_donation (id, donor_id, doctor_id, quantity) VALUES (2, 2, 2, 1.5);
INSERT INTO public.blood_donation (id, donor_id, doctor_id, quantity) VALUES (3, NULL, NULL, NULL);
INSERT INTO public.blood_donation (id, donor_id, doctor_id, quantity) VALUES (4, NULL, NULL, NULL);
INSERT INTO public.blood_donation (id, donor_id, doctor_id, quantity) VALUES (5, 5, 2, 1.5);
INSERT INTO public.blood_donation (id, donor_id, doctor_id, quantity) VALUES (6, NULL, NULL, NULL);
INSERT INTO public.blood_donation (id, donor_id, doctor_id, quantity) VALUES (7, NULL, NULL, NULL);
INSERT INTO public.blood_donation (id, donor_id, doctor_id, quantity) VALUES (8, NULL, NULL, NULL);
INSERT INTO public.blood_donation (id, donor_id, doctor_id, quantity) VALUES (9, 6, 1, 1.8);


--
-- TOC entry 3325 (class 0 OID 16461)
-- Dependencies: 212
-- Data for Name: doctor; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.doctor (id, firstname, lastname) VALUES (1, 'Vikas', 'Sharma');
INSERT INTO public.doctor (id, firstname, lastname) VALUES (2, 'Deepak', 'Kumar');
INSERT INTO public.doctor (id, firstname, lastname) VALUES (3, 'Aman', 'Singh');
INSERT INTO public.doctor (id, firstname, lastname) VALUES (4, 'Aman', 'Singh');
INSERT INTO public.doctor (id, firstname, lastname) VALUES (5, 'Kuldeep', 'Jha');
INSERT INTO public.doctor (id, firstname, lastname) VALUES (6, '', '');
INSERT INTO public.doctor (id, firstname, lastname) VALUES (7, 'Dinesh', 'Kumar');


--
-- TOC entry 3323 (class 0 OID 16454)
-- Dependencies: 210
-- Data for Name: donor; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.donor (id, name, dob, date_of_reg, blood_group, address, city, pincode) VALUES (1, 'Abhishek', '1994-07-23', '2022-03-26 18:50:19', 'A+ ', 'Sector 22', 'Noida', '201301 ');
INSERT INTO public.donor (id, name, dob, date_of_reg, blood_group, address, city, pincode) VALUES (2, 'Vishwas', '1993-12-12', '2022-03-26 18:50:19', 'B+ ', 'Sector 12', 'Noida', '201301 ');
INSERT INTO public.donor (id, name, dob, date_of_reg, blood_group, address, city, pincode) VALUES (3, 'Bhupendra', '1993-08-28', '2022-03-26 18:50:19', 'B+ ', 'Sector 37', 'Noida', '201307 ');
INSERT INTO public.donor (id, name, dob, date_of_reg, blood_group, address, city, pincode) VALUES (4, 'Amit', '1993-10-14', '2022-03-26 18:50:19', 'A+ ', 'Sector 22', 'Noida', '201301 ');
INSERT INTO public.donor (id, name, dob, date_of_reg, blood_group, address, city, pincode) VALUES (5, 'Gaurav', '1993-08-27', '2022-03-26 00:00:00', 'A+ ', 'Sector 22', 'Noida', '201301 ');
INSERT INTO public.donor (id, name, dob, date_of_reg, blood_group, address, city, pincode) VALUES (6, 'Neeraj', '1992-03-25', '2022-03-27 00:00:00', 'AB+', 'Uttam Nagar', 'Delhi', '201235 ');
INSERT INTO public.donor (id, name, dob, date_of_reg, blood_group, address, city, pincode) VALUES (7, 'd', '1998-02-26', '2022-03-27 00:00:00', 'O- ', 'sssd', 'sds', '202355 ');
INSERT INTO public.donor (id, name, dob, date_of_reg, blood_group, address, city, pincode) VALUES (8, 'aa', '1997-01-15', '2022-02-02 00:00:00', 'as ', 'as', 's', '258963 ');


--
-- TOC entry 3336 (class 0 OID 0)
-- Dependencies: 213
-- Name: blood_donation_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.blood_donation_id_seq', 9, true);


--
-- TOC entry 3337 (class 0 OID 0)
-- Dependencies: 211
-- Name: doctor_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.doctor_id_seq', 7, true);


--
-- TOC entry 3338 (class 0 OID 0)
-- Dependencies: 209
-- Name: donor_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.donor_id_seq', 8, true);


--
-- TOC entry 3182 (class 2606 OID 16473)
-- Name: blood_donation blood_donation_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.blood_donation
    ADD CONSTRAINT blood_donation_pkey PRIMARY KEY (id);


--
-- TOC entry 3180 (class 2606 OID 16466)
-- Name: doctor doctor_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.doctor
    ADD CONSTRAINT doctor_pkey PRIMARY KEY (id);


--
-- TOC entry 3178 (class 2606 OID 16459)
-- Name: donor donor_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.donor
    ADD CONSTRAINT donor_pkey PRIMARY KEY (id);


-- Completed on 2022-03-28 14:31:18

--
-- PostgreSQL database dump complete
--

