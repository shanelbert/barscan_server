## What is in this repo?

This repository contains a script to set up a server used by the Android app in [this repo](https://github.com/shanelbert/barscan).

## How to Start the Server
The following are the steps to run the server on Windows machine.

1. Install Node JS. You may refer to [this section](https://github.com/shanelbert/barscan?tab=readme-ov-file#setting-up-development-environment) in the Android app repo's readme to install it.

2. Download this repo as a zip file.

3. Extract the zip file.

4. Add Google service account credentials file. The steps here are written with [this guide](https://developers.google.com/workspace/guides/get-started#5_steps_to_get_started) as reference, specifically step [1](https://developers.google.com/workspace/guides/create-project#project), [2](https://developers.google.com/workspace/guides/enable-apis), and [5](https://developers.google.com/workspace/guides/create-credentials#service-account).
	
	1. Create Google Cloud project. You can access the page shown below using this [link](https://console.cloud.google.com/projectcreate).
		
		<img src="https://drive.usercontent.google.com/download?id=19ArVOR2qX3XXpEGEBWswlvwhZ_huGoTG" width="800px">
		
	2. Click the project button, then select the new project you have just made.
		
		<img src="https://drive.usercontent.google.com/download?id=13vEXPVVKCcAXzlyiDpDNsd6a7Ytntk-q" width="800px">
		
	3. Click ☰, "Products & solutions", then "All products".
		
		<img src="https://drive.usercontent.google.com/download?id=1ZM5TkmvWKwapjAv3-IhuW_diIB5ZRidT" width="800px">
		
	4. In the left sidebar, click "Other Google products", then click the "Google Workspace" link.
		
		<img src="https://drive.usercontent.google.com/download?id=1bQcPqodOkfeFtKRKJUZvHZhQ8I6JWmB4" width="800px">
		
	5. Click "Google Sheets API".
		
		<img src="https://drive.usercontent.google.com/download?id=1bRiyIcQxbpx_FvEKQ_VuAp22ZoyVJBor" width="800px">
		
	6. Click "ENABLE".
		
		<img src="https://drive.usercontent.google.com/download?id=1_fa-kyiADyIVUsnz3Q95rq5OxcAYvHEg" width="800px">
		
	7. Click ☰, "Products & solutions", then "All products".
		
		<img src="https://drive.usercontent.google.com/download?id=1-ayLY0BBb7kDsupE32zONbJLGRL9DrjG" width="800px">
		
	8. In the "Management" category, click the "IAM & Admin" link.
		
		<img src="https://drive.usercontent.google.com/download?id=1E9xqTCKiPsUMPF5CcXVGAuRfRGalPAzn" width="800px">
		
	9. In the left sidebar, select "Service Accounts", then click "+ CREATE SERVICE ACCOUNT".
		
		<img src="https://drive.usercontent.google.com/download?id=1HgzzT-mvkl5ct-f6NzZRoE4RkAvJhM5s" width="800px">
		
	10. Enter the details, then click the "DONE" button.
		
		<img src="https://drive.usercontent.google.com/download?id=1uXR5JoxBHdM5LD3cmiBjTVuB5FmzvGNW" width="800px">
		
	11. Click the new service account.
		
		<img src="https://drive.usercontent.google.com/download?id=1kQen3zyBFMrhstZUq7mZUIclJnn1Eb69" width="800px">
		
	12. Go to the "KEYS" tab, click "ADD KEY", then select "Create new key".
		
		<img src="https://drive.usercontent.google.com/download?id=1jXkkgOg1IE4lNzWRR4ZBKOiBZ4QLGzxh" width="800px">
	
	13. Select "JSON", then click "CREATE". The credentials file will be downloaded.
		 
		<img src="https://drive.usercontent.google.com/download?id=1hV71lnrcEvG7KOs0aSOqjHYuYmKPyOvv" width="800px">
		
	14. In the root of the project folder, create a new folder called "cred". Put the credentials file in this folder, then rename it to "credentials.json".
		
		<img src="https://drive.usercontent.google.com/download?id=1SX9rjS1rUonFlYzI1ey8cp5iXmacfWdI" width="800px">

5. Open command prompt in the project folder, then run `npm install`.

6. Assign a static IP address to your machine.
	1. Open command prompt, then run `ipconfig/all`. Look for the network adapter you are currently connected to, then take note of the "IPv4 Address", "Subnet Mask", "Default Gateway", and "DNS Servers".
		
		<img src="https://drive.usercontent.google.com/download?id=1wYskbt3PHOM7ihUSkHDAY_edWzqGFTvD" width="800px">
	
	2. Press Windows key on your keyboard, search for control panel, then open it.
		
		<img src="https://drive.usercontent.google.com/download?id=1uOvq9F3pvbWgJSRAJ2ntZ469fwUUFFuc" width="640px">
	
	3. Click "Network and Internet".
		
		<img src="https://drive.usercontent.google.com/download?id=1RfGlBD5ewvGAsCb8b6Zp84yId6_bhoVS" width="800px">
	
	4. Click "Network and Sharing Centre".
		
		<img src="https://drive.usercontent.google.com/download?id=1gH_CDfZvhC-v0CaCT4Gym4nSVtuieF3p" width="800px">
	
	5. Click "Change adapter settings".
		
		<img src="https://drive.usercontent.google.com/download?id=1GaaLPMZ4XXMlsFeMipftsI4VlCW2iHac" width="800px">
	
	6. Double click on the connected adapter.
		
		<img src="https://drive.usercontent.google.com/download?id=1167bbENkP7vqiCU9T8XmyIbJv4k3B8C7" width="800px">
	
	7. Click "Properties".
		
		<img src="https://drive.usercontent.google.com/download?id=13GupBW0f4pieK8D35V9A1A_k-vPsRRsW" width="480px">
	
	8. Double click "Internet Protocol Version 4 (TCP/IPv4)".
		
		<img src="https://drive.usercontent.google.com/download?id=1jPOPzPwg08sSAzUh2iUUXmU7uvW3fYm0" width="480px">
	
	9. Click "Use the following IP address", input the values you get from the `ipconfig/all` step, then click "OK".
		
		<img src="https://drive.usercontent.google.com/download?id=1uEiaYBIexQPiOyNasL4-k_5QEn3MvisG" width="480px">
	
	> You can use another IP address as long it hasn't already been used by other device in your network. You can check whether your IP address has already been used by other device by running the `ipconfig/all` command. After setting the IP address, the "IPv4 Address" will be marked as "(Duplicate)" as shown below.
	
	<img src="https://drive.usercontent.google.com/download?id=1piZgRmtJ7A5Tr5Jhi3VcWiH_3x8_PH3V" width="640px">

7. Open command prompt in the project folder, then run:
	
	`node server.js <ip address>`

	Use the static IP address you set in the previous step.