import { CronJob } from 'cron';

const job = new CronJob(
	'*/5 * * * * *', // cronTime (cada 10 segundos)
	function () {
		console.log('You will see this message every 10 seconds');
	}, // onTick
	null, // onComplete
	true, // start
	'America/Los_Angeles' // timeZone
);