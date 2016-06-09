<h2> Final Report | HCDE 598 | DS4UX </h2>

<h3> Introduction: </h3>
Simply put, I love the game of basketball. Basketball has thought me a lot of life lessons. DS4UX has given me an oppurtunity to give back. So I deciced to combine my love for the sport and talk of the town, namely Golden State Warriors basketball team and analyse the reasons for the rise of the team.


<h3> Motivation: </h3>
![alt text]( gsw.png "4 factor" )
<h4> 1) Golden State Warriors Team </h4>
    - 2015 NBA Champions
    - 2016 Western Conference Champions
    - The Warriors team beat the Chicago Bulls Record for most wins in a single season by finishing with 73 wins and 9 losses at the end of the 2015-16 regular season.
    - They broke a 131 year old record in all of major professional sports by winning their first 24 games.
    - The team set an NBA record 54 straight regular season home game winning streak beating Chicago Bulls.

![alt text]( steph.gif "4 factor" )
<h4> 2) Stephen Curry </h4>
    2015
    - NBA Champion
    - NBA Most Valuable Player
    - NBA 3-Point Contest Champion

    2016
    - NBA Most Valuable Player - Only Player in NBA
    - History to win the award by unanimous votes. NBA Scoring Champion
    - Finished the regular season with 402 3-pointers
    - 7th Player in NBA History to join 50-40-90 club - represents the shooting percentage for the field, beyond the arc and from the free throw line.

<h3> Research Question: "Rise of Golden State Warriors basketball team" </h3>
<h4> Hypothesis: </h4>
1) the 4 factor (Shooting, Rebounding, Free throws, Turnovers) percentage for the team has improved over the past 5 years

2) key stat of Steph Curry's game that has made him an indispensable resource to the GSW's team is shooting percentage

3) key stats of Harrison Barnes, Thompson, Iguodala and Green have is shooting percentage


<h3> Data Sources: </h3>
<h4> http://stats.nba.com/ </h4>
    - /stats/teaminfocommon
    - /stats/playercareerstats
    - /stats/commonplayerinfo 
    - /stats/commonteamroster
    - /stats/teamdashboardbygeneralsplits

<h3> Methods: </h3>
<h4> 1) Research </h4>
    - First of all, I researched the data sources through http://www.programmableweb.com/ and narrowed down the list to
        - http://stats.nba.com/
        - http://developer.sportradar.us
        - http://probasketballapi.com
    - But the latter 2 were behind a payroll.
    - So I decided to use stats.nba.com data source and went through the website to get access to the stats that I would require to perform the analysis. This required a lot of overhead. 

a) I had to first find the appropriate page for the required stats on the browser, then look through the network console and get access to the API's.
![alt text]( findings/networkBrowserConsole.png "4 factor" )

b) Then run the API on the browser.

c) Post which run the python script to fetch the results.

d) If the python code failed, repeat from step b.

<h4> 2) Dump Creation </h4>
If the python code ran, it created the data dump to the respective files.
![alt text]( findings/dataDump.png "4 factor" )

<h4> 3) Creation of CSV/JSON files </h4>
Then I wrote another python file, to convert the data dump to create JSON/CSV files in particular format so that it is ready to be visualized.
![alt text]( findings/datacsv.png "4 factor" ) 

<h4> 4) Data Visualization using D3 javascript library </h4>
I used D3 javascript library to visualize the data. For the scope of this class, I could do analyze the data in form on bar graphs only.
    I tried 2 ways to anaylze the data.
    - stats percentage vs year (grouped through stats)
    - stats percentage vs stats (grouped through years)

<h3> Findings: </h3>
1) 4 factor (Shooting, Rebounding, Free throws, Turnovers) percentage for the team over the past 5 years
![alt text]( findings/teamStats.png "4 factor" )

2) Stats of Steph Curry over the past 5 years
![alt text]( findings/CurryStats.png "4 factor" )

3) Stats of Clay Thompson over the past 5 years
![alt text]( findings/ThompsonStats.png "4 factor" )

4) Stats of Draymond Green over the past 5 years
![alt text]( findings/GreenStats.png "4 factor" )

5) Stats of Harrison Barnes over the past 5 years
![alt text]( findings/BarnesStats.png "4 factor" )

6) Stats of Andre Iguodala over the past 5 years
![alt text]( findings/IguodalaStats.png "4 factor" )

<h3> Discussion/Conclusion: </h3>
The shooting percentages has clearly improved for the team over the past 5 years.
With the graphs above, I could clearly see that points scored by players like Stephen Curry and Clay Thompson (who are the shooting guards of the team) have improved over the past 5 years and hence has had the biggest impact on the success of the team
Also, role players like Harrison Barnes, Draymond Green and Andre Iguodala though have not made great strides on scoring points like Stephen Curry or Clay Thompson, they have impacted the team through defence, assists and rebounds.
Basketball is a team oriented game and each player on the team has a role to play. The Golden State Warriors team have made tremendous impact as a team to win games where each player habe made thier own significant contribution.
The success of the team cannot be measure just by the stats of individual players. It is also influenced by the coaching staff, aspect of luck and the health of the team. These factors have not been measured and hence and few implications of the design of the system.


<h3> Future Research: </h3>
1) Dig deeper to analyze other stats such as assists, turnovers, blocks, steals, point differential of score.

2) Incorporate playoff stats, rather than just regular season stats to get more meaningful data.

3) Analyse the stats of the entire team to find deeper answers, rather than the 5 players, to find the impact of the bench players.

4) Use of other visualisations, such as chord diagram to visualize the data in other forms.


<h3> Limitations: </h3>
1) The NBA stats API is not publically released. One has to dig deep to find the appropriate API through the network logs on a web browser. On idenifying the right API, we need to call the same through a rest client like interface, and then run the python code to get appropriate data. 
Sometimes the call fails through the python code. In such cases we need to run the API through the rest client again and then run the python code. This process stunted the growth of the project and limited me to rethink the scope of the project.

2) There are other sources of data, such as Sportradar and probasketallapi, but these data are under a payroll. As a graudate student, I did not have the funds and hence decided to use only stats.nba.com.

<h3> Summary </h3>
DS4UX has provided me a platform to perform data analysis on Basketball and has helped me understand the how to analyze the results.
Though 2 of my hypthosis were proved right, other 3 were wrong. This goes to prove that champioships in basketball cannot be won by mere contributions of one player, but rather it requires collaborative team effort and each team member has a defined role.
It also shows that just by shooting the ball in the hoop might not win you games. The team needs to play defence and contribute to rebound, steals and assists.

<h3> Files </h3>
Resource : Folder Name

Data Dump : rawData

Processed Files: processedFiles


    
