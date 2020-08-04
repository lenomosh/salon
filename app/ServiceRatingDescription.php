<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ServiceRatingDescription extends Model
{
    protected $guarded =[];
    public function rating():BelongsTo{
        return $this->belongsTo(BusinessServiceRating::clearBootedModels(),'id','rating_id');
    }
}
