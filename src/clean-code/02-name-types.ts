(() => {

    const temperaturesCelsius = [33.6, 12.34];
    // const temperatureNumbers = [33.6, 12.34];
    // temperaturesCelsius is better because it clearly indicates the unit of measurement.

    const serverIpAddress = '123.123.123.123';

    const usersList = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];

    const userEmails = usersList.map( user => user.email );

    const canJump = false;
    const canRun = true;
    const hasItems = true;
    const isLoading = false;

    const startTime = new Date().getTime();
    const endTime = new Date().getTime() - startTime;


    function getBooks() {
        throw new Error('Function not implemented.');
    }

    function getBooksByUrl( url : string) {
        throw new Error('Function not implemented.');
    }
    
    function getSquareArea( side : number ) {
        throw new Error('Function not implemented.');
    }

    function printJob() {
        throw new Error('Function not implemented.');
    }
})();
