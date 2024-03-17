// sample file, follow the patterns
var CUSTOM_PLAYLISTS_TO_LOAD = [
	{mixcloud_search_key:"miss%20monique", mixcloud_match_regex:/.*?miss\s*monique.*/i},
        // sample for how to search by key then match by regex and reformat song titles
	//{mixcloud_search_key:"rons%20podcast%20%23", mixcloud_match_regex:/RONS.*?Podcast.*?\d{3,4}/i, name_to_replace:/RONS:? Podcast #?(\w+)/gmi, name_replace_with:`RONS: Podcast #$1`},
	
];
var INDIVIDUAL_TRACKS_TO_LOAD = [
	// sample to load individual mixcloud tracks:
	// {name:'my custom name', key:'/Hudson921/2000s-2010s-mix-2323/'}, // points to https://www.mixcloud.com/Hudson921/2000s-2010s-mix-2323/
];
