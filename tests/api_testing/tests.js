{
	"id": "f7e84a78-7150-38d6-54c5-4368e72e7c6d",
	"name": "Ziptag REST API",
	"description": "API Testing for Ziptag REST API endpoints.",
	"order": [
		"cd137d83-ea42-c5d6-47bf-6a51d99f315a",
		"0c3506ad-16fc-f1ef-a56f-ba8e3bc00cd6",
		"ff690669-14bd-a7dc-74e5-a357af58c4fa",
		"76451439-b8bc-a209-1a3b-9db2f28053c9",
		"af021f24-895c-b84c-255d-1b80af9b906d",
		"423da0f9-bf39-45ba-ffb0-b76995883b3c",
		"e07c3e76-55b9-e406-caac-3073a4341e26"
	],
	"folders": [],
	"folders_order": [],
	"timestamp": 1500976354435,
	"owner": "1779212",
	"public": false,
	"requests": [
		{
			"id": "0c3506ad-16fc-f1ef-a56f-ba8e3bc00cd6",
			"headers": "Content-Type: application/json\n",
			"headerData": [
				{
					"key": "Content-Type",
					"value": "application/json",
					"description": "",
					"enabled": true
				}
			],
			"url": "{{DevAPIBaseURL}}/authenticate",
			"queryParams": [],
			"preRequestScript": null,
			"pathVariables": {},
			"pathVariableData": [],
			"method": "POST",
			"data": [],
			"dataMode": "raw",
			"tests": "tests[\"Status code is 200\"] = responseCode.code === 200;\nvar jsonData = JSON.parse(responseBody);\n\n// Set token in Environment Variable\npostman.setEnvironmentVariable('accessToken', jsonData.token);",
			"currentHelper": "normal",
			"helperAttributes": {},
			"time": 1501699506960,
			"name": "Authenticate User Customer",
			"description": "",
			"collectionId": "f7e84a78-7150-38d6-54c5-4368e72e7c6d",
			"responses": [],
			"rawModeData": "{\n    \"EmailID\": \"ashutosh.nayak@incred.com\",\n    \"Password\": \"password\"\n}"
		},
		{
			"id": "423da0f9-bf39-45ba-ffb0-b76995883b3c",
			"headers": "Content-Type: application/json\nAuthorization: {{accessToken}}\n",
			"headerData": [
				{
					"key": "Content-Type",
					"value": "application/json",
					"enabled": true,
					"description": ""
				},
				{
					"key": "Authorization",
					"value": "{{accessToken}}",
					"enabled": true,
					"description": ""
				}
			],
			"url": "{{DevAPIBaseURL}}/categories",
			"queryParams": [],
			"preRequestScript": null,
			"pathVariables": {},
			"pathVariableData": [],
			"method": "POST",
			"data": [],
			"dataMode": "raw",
			"tests": null,
			"currentHelper": "normal",
			"helperAttributes": "{}",
			"time": 1501697303479,
			"name": "Add new Category",
			"description": "",
			"collectionId": "f7e84a78-7150-38d6-54c5-4368e72e7c6d",
			"responses": [],
			"folder": null,
			"descriptionFormat": null,
			"rawModeData": "{\n  \"CategoryName\": \"Automobile\"\n}"
		},
		{
			"id": "76451439-b8bc-a209-1a3b-9db2f28053c9",
			"headers": "Authorization: {{accessToken}}\n",
			"headerData": [
				{
					"key": "Authorization",
					"value": "{{accessToken}}",
					"description": "",
					"enabled": true
				}
			],
			"url": "{{DevAPIBaseURL}}/products",
			"queryParams": [],
			"preRequestScript": null,
			"pathVariables": {},
			"pathVariableData": [],
			"method": "GET",
			"data": null,
			"dataMode": "params",
			"version": 2,
			"tests": null,
			"currentHelper": "normal",
			"helperAttributes": {},
			"time": 1501434652074,
			"name": "Get Products",
			"description": "",
			"collectionId": "f7e84a78-7150-38d6-54c5-4368e72e7c6d",
			"responses": []
		},
		{
			"id": "af021f24-895c-b84c-255d-1b80af9b906d",
			"headers": "Content-Type: application/json\n",
			"headerData": [
				{
					"key": "Content-Type",
					"value": "application/json",
					"description": "",
					"enabled": true
				}
			],
			"url": "{{DevAPIBaseURL}}/registerUser",
			"queryParams": [],
			"preRequestScript": null,
			"pathVariables": {},
			"pathVariableData": [],
			"method": "POST",
			"data": [],
			"dataMode": "raw",
			"tests": null,
			"currentHelper": "normal",
			"helperAttributes": {},
			"time": 1501698107105,
			"name": "Register User",
			"description": "",
			"collectionId": "f7e84a78-7150-38d6-54c5-4368e72e7c6d",
			"responses": [],
			"rawModeData": "{\n\t\"FirstName\": \"Kanakdeepa\",\n    \"LastName\": \"Pradhan\",\n    \"EmailID\": \"kanakdeepa.pradhan91@gmail.com\",\n    \"Password\": \"password\",\n    \"City\": \"BLR\",\n    \"Phone\": \"+91-9590910084\"\n}"
		},
		{
			"id": "cd137d83-ea42-c5d6-47bf-6a51d99f315a",
			"headers": "Content-Type: application/json\n",
			"headerData": [
				{
					"key": "Content-Type",
					"value": "application/json",
					"description": "",
					"enabled": true
				}
			],
			"url": "{{DevAPIBaseURL}}/authenticate",
			"queryParams": [],
			"preRequestScript": null,
			"pathVariables": {},
			"pathVariableData": [],
			"method": "POST",
			"data": [],
			"dataMode": "raw",
			"tests": "tests[\"Status code is 200\"] = responseCode.code === 200;\nvar jsonData = JSON.parse(responseBody);\n\n// Set token in Environment Variable\npostman.setEnvironmentVariable('accessToken', jsonData.token);",
			"currentHelper": "normal",
			"helperAttributes": {},
			"time": 1501698196155,
			"name": "Authenticate User Admin",
			"description": "",
			"collectionId": "f7e84a78-7150-38d6-54c5-4368e72e7c6d",
			"responses": [],
			"rawModeData": "{\n    \"EmailID\": \"kanakdeepa.pradhan91@gmail.com\",\n    \"Password\": \"password\"\n}"
		},
		{
			"id": "e07c3e76-55b9-e406-caac-3073a4341e26",
			"headers": "Authorization: {{accessToken}}\n",
			"headerData": [
				{
					"key": "Authorization",
					"value": "{{accessToken}}",
					"description": "",
					"enabled": true
				}
			],
			"url": "{{DevAPIBaseURL}}/categories",
			"queryParams": [],
			"preRequestScript": null,
			"pathVariables": {},
			"pathVariableData": [],
			"method": "GET",
			"data": null,
			"dataMode": "params",
			"version": 2,
			"tests": null,
			"currentHelper": "normal",
			"helperAttributes": {},
			"time": 1501697842979,
			"name": "Get All Categories",
			"description": "",
			"collectionId": "f7e84a78-7150-38d6-54c5-4368e72e7c6d",
			"responses": []
		},
		{
			"id": "ff690669-14bd-a7dc-74e5-a357af58c4fa",
			"headers": "",
			"headerData": [],
			"url": "{{DevAPIBaseURL}}/testemail",
			"queryParams": [],
			"preRequestScript": null,
			"pathVariables": {},
			"pathVariableData": [],
			"method": "GET",
			"data": null,
			"dataMode": "params",
			"version": 2,
			"tests": null,
			"currentHelper": "normal",
			"helperAttributes": {},
			"time": 1501404901395,
			"name": "Email service test",
			"description": "",
			"collectionId": "f7e84a78-7150-38d6-54c5-4368e72e7c6d",
			"responses": []
		}
	]
}