API

To request JSON, use:
knowledgeResponseType=application/json
======= Example===========================================
A patient with the same diagnosis but the requested format is JSON and the language is English:

http://apps2.nlm.nih.gov/medlineplus/services/mpconnect_service.cfm?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=250.33&knowledgeResponseType=application/json
=============================================================
Requests for Diagnosis Codes

Requests by problem, base URL
http://apps.nlm.nih.

"gov/medlineplus/services/mpconnect.cfm"

=========Problem Code System Identification ===========

For ICD-9-CM
"mainSearchCriteria.v.cs=2.16.840.1.113883.6.103"

Identify the actual code you are trying to look up

"mainSearchCriteria.v.c=250.33"

Requests for Perscription Codes

"http://apps.nlm.nih.gov/medlineplus/services/mpconnect_service.cfm"

NDC Code System
"http://apps.nlm.nih.gov/medlineplus/services/mpconnect_service.cfm"

Identify actual code you are trying to look up
"mainSearchCriteria.v.c=637188"

Drug Name

"mainSearchCriteria.v.dn=Chantix 0.5 MG Oral Tablet"