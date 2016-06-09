HCDE 598 | Data Science

Introduction


Data Sources
1) http://stats.nba.com/
    - /stats/teaminfocommon
    - /stats/playercareerstats
    - /stats/commonplayerinfo 
    - /stats/commonteamroster
    - /stats/teamdashboardbygeneralsplits

2) Wikipedia


Methods

1) Research


2) Dump Creation


3) Dump Clean up


4) Creation of CSV files



Findings



Diccussion


Conclusions


Limitations: 
1) The NBA stats API is not publically released. One has to dig deep to find the appropriate API through the network logs on a web browser. On idenifying the right API, we need to call the same through a rest client like interface, and then run the python code to get appropriate data. 
Sometimes the call fails through the python code. In such cases we need to run the API through the rest client again and then run the python code. This process stunted the growth of the project and limited me to rethink the scope of the project.

2) There are other sources of data, such as ....., but these data are under a payroll. As a graudate student, I did not have the funds and hence decided to use only stats.nba.com

Summary


    
