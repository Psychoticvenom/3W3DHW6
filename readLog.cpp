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
	
	
	char time[50];
	fscanf (fp, "%s", time);
	printf ("%s ", time);
	
	int n;
	fscanf (fp, "%d", &n);
	printf ("%d ", n);
	
	char CODE [20];
	int DT;
	for (int i = 0; i < n; i++) {
		fscanf (fp, "%d%s", &DT, &CODE);
		printf ("%d %s ", DT, CODE); 
	}
	//printf ("\n");
	fclose (fp);
	exit (0);   
}

