import vision from '@react-native-firebase/ml-vision';
import moment from 'moment';

export async function processDocument(localPath) {
  try {
    const processed = await vision().cloudDocumentTextRecognizerProcessImage(localPath);

    var labels;
    var numbers
    var pos;

    var total;
    var day;

    for (var i = 0; i < processed.blocks.length; ++i) {
      var splt = processed.blocks[i].text.split(/\r?\n/);
      for (var j = 0; j < splt.length; ++j) {
        var word = splt[j];
        if (word.startsWith('Total') || word.startsWith('total') || word.startsWith('TOTAL')) {
          labels = splt;
          numbers = processed.blocks[i + 1].text.split(/\r?\n/);
          pos = j;
        }
        if (word.includes('/') || word.includes('-')) {
          var date = word.split(' ');
          date.forEach(d => {
            if ((d.length > 7 && d.length < 11) && (d.includes('/') || d.includes('-'))) {
              if (moment(d, 'MM DD YYYY') !== null);
              day = moment(d, 'MM DD YYYY');
            }
          })
        }
      }
    }

    var regex = /\d/g;
    if (regex.test(labels[pos]))
      total = labels[pos].substr('total '.length);
    else
      total = numbers[pos];

    return { amount: total, timestamp: day.format('YYYY-MM-DD HH:mm:ss'), merchant: {name: 'Custom Scanned Reciept'}, currency: 'GBP', creditDebitIndicator: 'Cash', transactionUUID: moment().format() };
  }
  catch {
    return {};
  }
}