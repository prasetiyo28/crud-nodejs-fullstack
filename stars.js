function stars(num) {
    let i, j, N = num;

    /* Input number of rows from user */
    

    /* Iterate over each row */
    for(i=1; i<=N; i++)
    {
        /* Iterate over each column */
        for(j=1; j<=N; j++)
        {
            if(i==1 || i==N || j==1 || j==N)
            {
                /* Print star for 1st, Nth row and column */
                process.stdout.write("*");
            }
            else
            {
                process.stdout.write(" ");
            }
        }

        /* Move to the next line/row */
        process.stdout.write("\n");
    }
}



stars(5);

//https://codeforwin.org/2015/07/c-program-to-print-hollow-square-star-pattern.html