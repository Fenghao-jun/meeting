/* global Office console */

const insertText = async (text) => {
  // Write text to the cursor point in the compose surface.
  try {
    Office.context.mailbox.item.body.setSelectedDataAsync(
      text,
      { coercionType: Office.CoercionType.Text },
      (asyncResult) => {
        if (asyncResult.status === Office.AsyncResultStatus.Failed) {
          throw asyncResult.error.message;
        }
      }
    );
  } catch (error) {
    console.log("Error: " + error);
  }
};

export default insertText;

export const setMeetingTime = () => {
  const start = new Date(); // Represents current date and time.
  start.setDate(start.getDate() + 2); // Add 2 days to current date.
  Office.context.mailbox.item.start.setAsync(start, (result) => {
    if (result.status !== Office.AsyncResultStatus.Succeeded) {
      console.error(`Action failed with message ${result.error.message}`);
      return;
    }
    console.log(`Successfully set start date and time to ${start}`);
  });
};
