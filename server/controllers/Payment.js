import Razorpay from 'razorpay'
const razorpay = new Razorpay({
    key_id: 'rzp_test_HBOeWhcpQppyPx',
    key_secret: 'wlAONl1h0MWKfz2fiASPkKLs',
  });
export const Payment=async (req, res) => {
    const options = {
      currency: 'INR',
      receipt: 'receipt_order_1',
    };
  
    try {
      const order = await razorpay.orders.create(options);
      res.json(order);
    } catch (error) {
      res.status(500).send(error);
    }
  };