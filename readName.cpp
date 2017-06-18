#include <stdio.h>
#include <stdlib.h>
#include <string.h>

//
// usage: 
//  readLog filename 
//
//

int main (int argc, char**argv) {
		
	FILE *fp = fopen (argv[1], "r");
	
	char userName[20];
	while ( fscanf (fp, "%s", &userName) != EOF )
			printf ("%s", userName) ; 

	//printf ("\n");
	fclose (fp);
	exit (0);   
}

