#include <stdio.h>
#define MAX 5
int main()
{
    char str[100];

    // MAX Size if 50 defined
   // fgets(str, MAX, stdin);

    //printf("String is: \n");
    // Displaying Strings using Puts
   // puts(str);
   for (int i=0;i<100;i++){
    scanf("%c",&str[i]);
   }
   for(int j=0;j<100;j++){
    printf("%c",str[i]);
   }

    return 0;
}
