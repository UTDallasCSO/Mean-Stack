randomSentence();
function randomSentence()
{
	var outputElement = document.getElementById('sentence');
	var r_text = new Array ();
	var r_player = new Array ();
	var r_team = new Array ();
	var r_position = new Array ();

	//Random players
	r_player[0] = "Tom Brady"; 
	r_player[1] = "Alan Ball"; 
	r_player[2] = "Ameer Abdullah"; 
	r_player[3] = "Mack Brown"; 
	r_player[4] = "Chris Baker"; 
	r_player[5] = "Theo Agnew"; 
	r_player[6] = "Darrius Allen"; 
	r_player[7] = "Jonathan Casillas"; 
	r_player[8] = "Odell Beckham Jr."; 
	r_player[9] = "Rod Smith"; 
	r_player[10]= "Corey White"
	var player = Math.floor(r_player.length * Math.random());

	//Random teams
	r_team[0] = "Dallas Cowboys"; 
	r_team[1] = "New York Giants"; 
	r_team[2] = "Washington Redskins"; 
	r_team[3] = "Miami Dolphins"; 
	r_team[4] = "Chicago Bears"; 
	r_team[5] = "Indianapolis Colts"; 
	r_team[6] = "Pittsburgh Steelers"; 
	r_team[7] = "New Orleans Saints"; 
	r_team[8] = "Green Bay Packers"; 
	r_team[9] = "Seattle Seahawks"; 
	r_team[10]= "New England Patriots"
	var team = Math.floor(r_team.length * Math.random());

	//Random positions
	r_position[0] = "Quarterback"; 
	r_position[1] = "Running Back"; 
	r_position[2] = "Wide Receiver"; 
	r_position[3] = "Defensive End"; 
	r_position[4] = "Outside Linebacker"; 
	r_position[5] = "Cornerback"; 
	r_position[6] = "Safety"; 
	r_position[7] = "Kicker"; 
	r_position[8] = "Punter"; 
	r_position[9] = "Gunner"; 
	r_position[10]= "Offensive tackle"
	var position = Math.floor(r_position.length * Math.random());

	//Random questions + random teams, positions & players
	r_text[0] = "What players on my team just got injured?"; 
	r_text[1] = "Which players on "+r_team[team]+" just got injured?."; 
	r_text[2] = "Give me a list of running backs currently in recovery."; 
	r_text[3] = "Give me a list of "+r_position[position]+"s currently in recovery."; 
	r_text[4] = "What player on my team might not play this week?"; 
	r_text[5] = "What player on "+r_team[team]+" might not play this week?"; 
	r_text[6] = "Who to play this week?"; 
	r_text[7] = "Who do I play this week?"; 
	r_text[8] = "Which "+r_position[position]+" to play this week?"; 
	r_text[9] = "What "+r_position[position]+" should I play this week?"; 
	r_text[10] = "Which "+r_position[position]+" to play in week 12?"; 
	r_text[11] = "Which "+r_position[position]+" to play for this week?"; 
	r_text[12] = "Choose one "+r_position[position]+" to play for this week?"; 
	r_text[13] = "Who should I play week 12?"; 
	r_text[14] = "Is "+r_player[player]+" playing this week?"; 
	r_text[15] = "Will "+r_player[player]+" play this week?"; 
	r_text[16] = "Is "+r_player[player]+" playing this week?"; 
	r_text[17] = "Is "+r_player[player]+" ready to play?"; 
	r_text[18] = "Who are the top "+r_position[position]+" players this year?"; 
	r_text[19] = "Who is the top "+r_position[position]+" rookie player this year?"; 
	r_text[20] = "Should I accept the trade offer?"; 
	r_text[21] = "What lineup changes should I make this week?"; 
	r_text[23] = "What is the best "+r_position[position]+" available in my league?"; 
	r_text[22] = "Who is the best "+r_position[position]+" available in my league?"; 
	r_text[24] = "Is there anyone coming off waivers that I should try and pick?"; 
	r_text[25] = "What are the odd of me winning this week?"; 
	r_text[26] = "Who should I bench?"; 
	r_text[27] = "Should I make any trade offers this week?"; 
	r_text[28] = "Take "+r_player[player]+" off the bench and put Sean Lee on the bench"; 
	r_text[29] = "Which players are on a bye-week this week?"; 
	r_text[30] = "What player on "+r_team[team]+" might not play this week?"; 
	r_text[31] = "What are the most underrated players in the league?"; 
	r_text[32] = "Which player should I draft next week?"; 
	r_text[33] = "When do my lineups lock?"; 
	r_text[34] = "Do I have any "+r_team[team]+" players on my team?"; 
	r_text[35] = "Who should I pick? "+r_player[player]+" or "+r_player[player/2+1]+" ?"; 
	r_text[36] = "Are there any players on my roster that are actively dropped, playing against my defense?"; 
	r_text[37] = "Are there any players on my rosters that are actively dropped?"; 
	r_text[38] = "Which players are actively dropped in other leagues?"; 
	r_text[39] = "Which defense team should I play this week?"; 
	r_text[40] = "Did any players on my league not practice this week?"; 
	r_text[41] = "What is the average points for Tom Brady against Dallas Cowboys in their hometown?"; 
	r_text[42] = "How many times has Matt Casey successfully passed when playing against New York Giants?"; 
	var text = Math.floor(r_text.length * Math.random()); 

	outputElement.innerHTML = r_text[text];
}