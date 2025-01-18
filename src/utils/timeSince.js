export const timeSince = (date) => {
    const second = Math.floor((new Date().valueOf() - date.valueOf())/1000);

    let interval = Math.floor(second / 31536000);

    if(interval > 1){
        return `${interval} years ago`;
    }

    interval = Math.floor(second / 2592000);

    if(interval > 1){
        return `${interval} months ago`;
    }

    interval = Math.floor(second / 86400);

    if(interval > 1){
        return `${interval} days ago`;
    }

    interval = Math.floor(second / 3600);

    if(interval > 1){
        return `${interval} hours ago`;
    }

    interval = Math.floor(second / 60);

    if(interval > 1){
        return `${interval} minutes ago`;
    }

    return `${Math.floor(second)} seconds ago`;

    

}