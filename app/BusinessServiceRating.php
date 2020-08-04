<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class BusinessServiceRating extends Model
{
    //
    protected $guarded = [];
    public function service(): HasMany{
        return $this->hasMany(BusinessService::class,'id','service_id');
    }
}
