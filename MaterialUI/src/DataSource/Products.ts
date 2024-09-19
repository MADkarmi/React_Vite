// import {v4 as uuid} from 'uuid';

export interface Product {
    id: string;
    name: string;
    type: string;
    price: number;
    availability: boolean;
    available_items: number;
}


export const Products: Product[] =
    [ {
		"id": "e6e06b47-75d7-4f88-a5fa-5c1dbdf1cda1",
		"name": "iPhone 13",
		"type": "Smartphone",
		"price": 999.99,
		"availability": true,
		"available_items": 20
	},
	{
		"id": "2f5e57d9-0d94-4a07-a45d-f131a84a1010",
		"name": "Samsung Galaxy S22",
		"type": "Smartphone",
		"price": 1099.99,
		"availability": true,
		"available_items": 15
	},
	{
		"id": "91fc8b90-5b5b-4a5b-8aeb-cb5c21c3b864",
		"name": "Google Pixel 7",
		"type": "Smartphone",
		"price": 799.99,
		"availability": false,
		"available_items": 0
	},
	{
		"id": "d0e68c5b-732e-4e11-8b08-9eb70b294d75",
		"name": "Apple Watch Series 7",
		"type": "Smartwatch",
		"price": 399.99,
		"availability": true,
		"available_items": 10
	},
	{
		"id": "41c6a63b-7a3c-4ee0-8c52-7863d302fc91",
		"name": "Samsung Galaxy Watch 4",
		"type": "Smartwatch",
		"price": 349.99,
		"availability": true,
		"available_items": 25
	},
	{
		"id": "23d84195-2d2c-4943-8be3-15d1832853d6",
		"name": "Sony WH-1000XM4",
		"type": "Headphones",
		"price": 349.99,
		"availability": true,
		"available_items": 30
	},
	{
		"id": "d4543d72-7cd4-476d-82c4-7a6ee607a8a4",
		"name": "Bose QuietComfort 45",
		"type": "Headphones",
		"price": 329.99,
		"availability": true,
		"available_items": 20
	},
	{
		"id": "7d0a1d50-9428-4877-8f95-3d878f751c72",
		"name": "Dell XPS 15",
		"type": "Laptop",
		"price": 1799.99,
		"availability": true,
		"available_items": 10
	},
	{
		"id": "3e6bd1b2-73b5-4ee2-9ecf-24ad07aa6d98",
		"name": "Sony PlayStation 5",
		"type": "Gaming Console",
		"price": 499.99,
		"availability": true,
		"available_items": 5
	},
	{
		"id": "9bb2b16d-fc18-4f36-a372-65b1c3a4392e",
		"name": "Microsoft Xbox Series X",
		"type": "Gaming Console",
		"price": 499.99,
		"availability": true,
		"available_items": 7
	},
	{
		"id": "d5ef3a19-2a5a-49e0-8a49-19f798d22548",
		"name": "Canon EOS R5",
		"type": "Camera",
		"price": 3899.99,
		"availability": true,
		"available_items": 3
	},
	{
		"id": "f6b0c0b9-0c84-4bb5-9dd1-ec5b14ee0e86",
		"name": "Nikon Z9",
		"type": "Camera",
		"price": 5499.99,
		"availability": false,
		"available_items": 0
	},
	{
		"id": "fe1217a2-4a32-4ba7-8df8-0e7bfce3b953",
		"name": "DJI Mavic Air 2",
		"type": "Drone",
		"price": 799.99,
		"availability": true,
		"available_items": 10
	},
	{
		"id": "b8f1e120-0515-47b6-bc1d-4b634f8e6e65",
		"name": "GoPro Hero 10",
		"type": "Action Camera",
		"price": 499.99,
		"availability": true,
		"available_items": 15
	},
	{
		"id": "2140a4b5-862b-49db-b8f4-3151a2f849c2",
		"name": "Fitbit Charge 5",
		"type": "Fitness Tracker",
		"price": 179.99,
		"availability": true,
		"available_items": 20
	},
	{
		"id": "2e16c832-f40a-478e-a69f-97c2b5a7a493",
		"name": "Garmin Fenix 7",
		"type": "Fitness Watch",
		"price": 699.99,
		"availability": true,
		"available_items": 8
	},
	{
		"id": "0a6b4c0e-69ff-4547-b47e-af585a4e2e6d",
		"name": "Bose SoundLink Revolve+",
		"type": "Bluetooth Speaker",
		"price": 299.99,
		"availability": true,
		"available_items": 12
	},
	{
		"id": "fb0339d8-f66f-4e3b-9334-9a37f0f93cf7",
		"name": "JBL Flip 5",
		"type": "Bluetooth Speaker",
		"price": 129.99,
		"availability": true,
		"available_items": 30
	},
	{
		"id": "3d2f95bb-2c1c-4cd0-bd67-6b556c824bbf",
		"name": "Amazon Echo Dot (4th Gen)",
		"type": "Smart Speaker",
		"price": 49.99,
		"availability": true,
		"available_items": 50
	},
	{
		"id": "74674b46-8c59-4a5f-ba4a-15f2ab218c3f",
		"name": "Google Nest Audio",
		"type": "Smart Speaker",
		"price": 99.99,
		"availability": true,
		"available_items": 25
	},
	{
		"id": "d35a4e94-aa5e-41a1-aec0-8f2c79e8b063",
		"name": "LG OLED C1",
		"type": "Television",
		"price": 1999.99,
		"availability": true,
		"available_items": 5
	},
	{
		"id": "1b78cb68-7e52-4d96-b9f0-cdf101d27588",
		"name": "Samsung QN90A Neo QLED",
		"type": "Television",
		"price": 2499.99,
		"availability": true,
		"available_items": 3
	},
	{
		"id": "22769d46-e7b1-488b-bae8-c354f13909db",
		"name": "Sony WH-1000XM4",
		"type": "Headphones",
		"price": 349.99,
		"availability": true,
		"available_items": 30
	},
	{
		"id": "59c2dd3d-4295-4a09-8930-2e8bbf39dd8b",
		"name": "Bose QuietComfort Earbuds",
		"type": "Earbuds",
		"price": 279.99,
		"availability": true,
		"available_items": 15
	},
	{
		"id": "9cb72669-bd9b-4b32-b77f-23cd33d99e8d",
		"name": "Apple AirPods Pro",
		"type": "Earbuds",
		"price": 249.99,
		"availability": true,
		"available_items": 20
	},
	{
		"id": "abb01f92-8eab-46d3-a5c1-cd50b04dd46e",
		"name": "Logitech MX Master 3",
		"type": "Mouse",
		"price": 99.99,
		"availability": true,
		"available_items": 40
	},
	{
		"id": "e91d93fc-0fa0-4e22-b9e0-3ddc64c3e0bb",
		"name": "Razer DeathAdder V2",
		"type": "Mouse",
		"price": 69.99,
		"availability": true,
		"available_items": 50
	},
	{
		"id": "fb39c439-f5b5-4d5d-a365-0f4acfb20958",
		"name": "Logitech G Pro X",
		"type": "Gaming Headset",
		"price": 129.99,
		"availability": true,
		"available_items": 20
	},
	{
		"id": "235bd764-8623-43a7-a2f1-2f3580320746",
		"name": "HyperX Cloud II",
		"type": "Gaming Headset",
		"price": 99.99,
		"availability": true,
		"available_items": 30
	},
	{
        "id": "cd84f024-fa2d-4ba8-b3c1-73adfe95a236",
        "name": "Microsoft Surface Pro 8",
        "type": "Tablet",
        "price": 1099.99,
        "availability": true,
        "available_items": 8
    },
    {
        "id": "b326e8c3-f64e-4b1b-aa01-ee6d4c977cc8",
        "name": "iPad Air (2022)",
        "type": "Tablet",
        "price": 599.99,
        "availability": true,
        "available_items": 12
    },
    {
        "id": "41f019eb-8251-42f5-81d1-160189b71c5e",
        "name": "Canon EOS R6",
        "type": "Camera",
        "price": 2499.99,
        "availability": true,
        "available_items": 5
    },
    {
        "id": "7cf26c56-b1b3-4f46-85bb-d30e0cd6e5c3",
        "name": "DJI Mini 2",
        "type": "Drone",
        "price": 449.99,
        "availability": true,
        "available_items": 15
    }
];
