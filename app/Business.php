<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Business extends Model
{
    protected $guarded = [];

    /**
     * @return BelongsTo
     */
    public function type(): BelongsTo
    {
        return $this->belongsTo(BusinessType::class,"business_type_id");
}
public function images(): HasMany
{
    return $this->hasMany(BusinessImage::class,'business_id','id');
}
public function operatingHours():HasMany{
        return $this->hasMany(BusinessOperatingHour::class,'business_id','id');
}
public function owner():BelongsTo{
        return $this->belongsTo(User::class,'user_id');
}
public function location():BelongsTo{
        return  $this->belongsTo(Location::class,'location_id');
}
public function services():HasMany{
        return $this->hasMany(BusinessService::class);
}
}
