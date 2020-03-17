export default function calculateDate(numDays) {
  var today = new Date();
  var msPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds per day
  var till = numDays * msPerDay;
  var theday = new Date(today.getTime() + till);
  return theday;
}
