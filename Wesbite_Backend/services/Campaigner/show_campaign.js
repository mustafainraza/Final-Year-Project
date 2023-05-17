const sqlConn = require('../../db/db_connection');

const showCampaign = async () => {
  

  const result = await sqlConn.connection.query(`
  select  c.*, cc.campaigner_name, 
  (c.campaign_end_time- current_date) AS days_left, 
  (100*(c.campaign_earning)/(c.campaign_goal)) as progress , 
  count(f.campaign_id) as likes 
  from campaign c left join 
  favourites f on c.campaign_id= f.campaign_id left join 
  campaigner cc on c.campaigner_id = cc.campaigner_id 
  where c.campaign_status=true and c.campaign_id not in (select campaign_id from rejected_campaign) and c.campaign_end_time > NOW() 
  group by c.campaign_id, cc.campaigner_name order by c.campaign_id desc
  `);
  console.log(result.rows)
  return result.rows
};

module.exports.showCampaign = showCampaign;
