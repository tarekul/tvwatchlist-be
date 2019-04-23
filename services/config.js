const dbAddr = (process.env.DATABASE_URL || 'postgres://localhost/tvwatchlistapp')

module.exports = {dbAddr}